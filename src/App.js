import { Registration } from "./components/registration";
import { GetApi } from "./components/getUserApi";

export function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <h2>User list</h2>
          <Registration />
        </header>
        <main className="content">{<GetApi />}</main>
      </div>
    </>
  );
}
