import "@/styles/index.css";

export const metadata = {
  title: "Chat Propmpt",
  description: "layout",
};

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
