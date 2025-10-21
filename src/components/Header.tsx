import logo from "@/assets/logo-main.png";

export const Header = () => {
  return (
    <header className="bg-white border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Hunting Promos SA" className="h-16 md:h-20 w-auto" />
        </div>
      </div>
    </header>
  );
};
