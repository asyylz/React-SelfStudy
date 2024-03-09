import LeftSideBar from "../components/LeftSideBar";
import TopSeacrhBar from "../components/TopSearchBar";
import RightSubMain from "../components/RightSubMain";
import Data from "../helper/Data";
export default function HomePage({ data }) {
  return (
    <>
      <LeftSideBar />
      <div className="main">
        <TopSeacrhBar />
        <RightSubMain doctorData={data} />
      </div>
    </>
  );
}
