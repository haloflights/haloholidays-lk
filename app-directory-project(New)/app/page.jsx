import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_3/page";

export const metadata = {
  title: "Halo Flights LK || Here For You",
  description: "Halo Flights LK || Here For You",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
