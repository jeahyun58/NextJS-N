import NavBar from "./NavBar";

export default function Layout({ childeren }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
