const NotFoundPage = () => {
  return (
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-5xl font-semibold text-orange-600">404</p>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight text-balance text-gray-900">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          입력한 주소가 잘못되었거나, 매뉴얼이 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <div className="mx-auto mt-6 w-48 rounded-md bg-orange-500 p-2 text-white">
          <h1 className="text-2xl">ezManual</h1>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
