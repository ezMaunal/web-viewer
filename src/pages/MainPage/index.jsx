import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import getManualSteps from "@/api/getManualSteps";
import LoadingModal from "@/components/LoadingModal";
import ManualCard from "@/components/ManualCard";
import { formatToLocalDateTime } from "@/utils/dateUtil";

const MainPage = () => {
  const navigate = useNavigate();
  const { manualId } = useParams();

  const [manual, setManual] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSlideMode, setIsSlideMode] = useState(true);

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
    <div className="mx-auto max-w-4xl px-4 pt-3 pb-12 sm:px-6 lg:px-8 lg:pt-5">
      <div className="mb-10 w-full rounded-lg bg-orange-500 py-3 text-center text-white">
        <span className="text-3xl">ezManual</span>
      </div>
      <div className="mb-5">
        <label className="me-5 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={isSlideMode}
            onChange={() => setIsSlideMode(!isSlideMode)}
            className="peer sr-only"
          />
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-orange-500 peer-focus:ring-4 peer-focus:ring-orange-300 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-orange-500 dark:peer-focus:ring-orange-800"></div>
          <span className="ms-3 text-base font-medium text-gray-900 dark:text-black">
            슬라이드 모드
          </span>
        </label>
      </div>
      <div className="w-full">
        <div className="fw-bold mb-3 text-3xl">{manual.name}</div>
        <div className="text-sm text-gray-400">{formatToLocalDateTime(manual.createdAt)}</div>
        <hr className="my-5 border-t border-gray-300" />
        {isSlideMode ? (
          <Swiper
            id="manualSwiper"
            pagination={{ type: "fraction" }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {manual.steps.map((step, index) => (
              <SwiperSlide key={step.imageId}>
                <ManualCard
                  index={index}
                  title={step.text}
                  image={step.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-col gap-8">
            {manual.steps.map((step, index) => (
              <div key={step.imageId}>
                <ManualCard
                  index={index}
                  title={step.text}
                  image={step.url}
                />
                {index !== manual.steps.length - 1 && (
                  <div className="my-4 flex justify-center text-5xl text-orange-400">↓</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
