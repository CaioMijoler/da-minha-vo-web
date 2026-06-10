import imgLogo from "../../assets/images/logo.png";

export function BrandLogo() {
  return (
    <img
      src={imgLogo}
      alt="Da Minha Vó"
      className="w-full h-full object-contain mix-blend-multiply"
    />
  );
}
