export const RegisterValidations = () => {
  return (
    <div className="w-screen  text-xs my-6">
      <ul className="list-disc w-60 mx-auto">
        <li>Mindestens 8 Zeichen</li>
        <li>Mindestens ein Groß- und Kleinbuchstaben</li>
        <li>Mindestens eine Zahl</li>
        <li>Mindestens ein Sonderzeichen</li>
      </ul>
    </div>
  );
};
