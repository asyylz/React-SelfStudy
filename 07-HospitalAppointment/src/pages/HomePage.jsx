import LeftSideBar from "../components/LeftSideBar";
import TopSeacrhBar from "../components/TopSearchBar";
import RightSubMain from "../components/RightSubMain";
import LocalStoragePostGet from "../components/LocalStoragePostGet";
import { useEffect } from "react";
export default function HomePage({ data }) {
  const [storedData, setStoredData] = LocalStoragePostGet("dataInfo", data);

  useEffect(() => {
    setStoredData(storedData);
  }, [data, setStoredData]);

  return (
    <>
      <LeftSideBar />
      <div className="main">
        <TopSeacrhBar />
        <RightSubMain storedData={storedData} setStoredData={setStoredData}/>
      </div>
    </>
  );
}
