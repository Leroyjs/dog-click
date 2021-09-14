import { MainWrapper } from "../components/general/MainWrapper";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <MainWrapper>
      <section className="error-page">
        <h1 className="text text_type_main-title">Страница не найдена</h1>
        <br />
        <div className="text text_type_h2">
          Перейдите на{" "}
          <Link href="/">
            <a className="text text_color_main">главную страницу.</a>
          </Link>
        </div>
      </section>
    </MainWrapper>
  );
}
