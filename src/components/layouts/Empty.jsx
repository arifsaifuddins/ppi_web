function Empty({ empty }) {
  return (
    <div className="flex h-96 w-full justify-center items-center">
      <h1 className="font-bold text-xl">{empty}</h1>
    </div>
  );
}

export default Empty;