

export default function infos({ params }: { params: { id: number } }) {
  return (
    <div>
      <h2>{params.id}</h2>
    </div>
  );
};