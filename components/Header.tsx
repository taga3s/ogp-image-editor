const Header = () => {
  return (
    <header class="px-6 py-4 border-b-2 flex justify-between items-center">
      <div class="flex items-end gap-4">
        <h1 class="text-2xl font-bold">OGP画像えでぃたー</h1>
      </div>
      <div class="flex items-center gap-2">
        <img class="w-6" src="logo.svg" alt="fresh icon" />
        <span>
          Created by{" "}
          <a href="https://github.com/taga3s" class="text-cyan-600 underline">
            taga3s
          </a>
        </span>
      </div>
    </header>
  );
};

export { Header };
