import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container mx-auto m-4 m-4">
      <h1 className="font-bold underline pb-2">This is library Initial Page</h1>
      <p>In here we are going to define each of the user generated libraries</p>
      <Link to="/mylibrary">Ir a mi libreria</Link>
    </div>
  );
}
