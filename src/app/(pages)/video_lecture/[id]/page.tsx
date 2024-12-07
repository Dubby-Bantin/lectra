import ZegoCall from "@/components/lectures/calls/ZegoCall";
const Zego = ({ params: { id } }: { params: { id: string } }) => {
  return <ZegoCall id={id} />;
};

export default Zego;
