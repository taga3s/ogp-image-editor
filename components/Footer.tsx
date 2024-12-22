const Footer = () => {
  return (
    <footer class="px-4 py-5 border-t-2 text-right flex justify-end">
      <div class="flex items-center gap-2">
        <img class="w-6" src="logo.svg" alt="fresh icon" />
        <span>
          Created by{" "}
          <a href="https://github.com/taga3s" class="text-cyan-600 underline">
            taga3s
          </a>
        </span>
      </div>
    </footer>
  );
};

export { Footer };
