interface Props {
  setOpenMenu: (openMenu: boolean) => void;
}

const Overlay = ({ setOpenMenu }: Props) => {
  return (
    <div
      onClick={() => setOpenMenu(false)}
      className="fixed lg:hidden min-h-screen inset-0 z-20 bg-black/50"
    />
  );
};

export default Overlay;
