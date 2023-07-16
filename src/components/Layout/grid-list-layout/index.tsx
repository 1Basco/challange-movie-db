interface IGridListLayoutProps {
  children?: React.ReactNode;
  title: string;
}
const GridListLayout: React.FC<IGridListLayoutProps> = ({
  children,
  title,
}: IGridListLayoutProps): JSX.Element => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 md:mx-16 2xl:mx-36">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mx-auto">
        {children}
      </div>
    </>
  );
};

export default GridListLayout;
