const MainPage = () => {
  return (
    <>
      <div class="mx-auto max-w-3xl px-4 pt-3 pb-12 sm:px-6 lg:px-8 lg:pt-5">
        <div className="mb-10 w-full rounded-lg bg-orange-500 py-3 text-center text-white">
          <span className="text-3xl">ezManual</span>
        </div>

        <div class="max-w-2xl">
          <div className="fw-bold mb-3 text-3xl">처음부터 만드는 크롬 확장 프로그램</div>
          <hr className="my-5 border-t border-gray-300" />

          <div className="mb-4 rounded-lg border border-gray-400 p-3">
            <div className="mb-3">1. "여기를" 클릭하세요</div>
            <div>
              <img
                class="w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Blog Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
