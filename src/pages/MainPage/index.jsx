import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import getManualSteps from "@/api/getManualSteps";
import LoadingModal from "@/components/LoadingModal";
import ManualCard from "@/components/ManualCard";
import { formatToLocalDateTime } from "@/utils/dateUtil";

const MainPage = () => {
  const navigate = useNavigate();
  const { manualId } = useParams();

  const [manual, setManual] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (manualId) {
      getManualSteps(manualId)
        .then((manual) => {
          setManual(manual.data);
        })
        .catch(() => {
          navigate("/not-found");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [manualId, navigate]);

  if (isLoading) return <LoadingModal />;
  return (
    <>
      <div class="mx-auto max-w-3xl px-4 pt-3 pb-12 sm:px-6 lg:px-8 lg:pt-5">
        <div className="mb-10 w-full rounded-lg bg-orange-500 py-3 text-center text-white">
          <span className="text-3xl">ezManual</span>
        </div>

        <div class="w-full">
          <div className="fw-bold mb-3 text-3xl">{manual.name}</div>
          <div className="text-sm text-gray-400">{formatToLocalDateTime(manual.createdAt)}</div>
          <hr className="my-5 border-t border-gray-300" />
          {manual.steps.map((step, index) => {
            return (
              <div key={step.imageId}>
                <ManualCard
                  title={step.text}
                  image={step.url}
                />
                {index !== manual.steps.length - 1 && (
                  <div className="mb-5 flex justify-center text-3xl text-orange-400">↓</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
