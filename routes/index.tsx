import { Header } from "../components/Header.tsx";
import { HomePresenter } from "../islands/HomePresenter.tsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePresenter />
    </div>
  );
}
