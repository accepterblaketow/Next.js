/** 
*   @author RoseNFan <blaketow1456@gmail.com> 李德龍
**/
import Image from "next/image";
export default function CustomCard({item}){
    return(
        <div className="border text-black">
            <img width="200" height="200" src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} />
            <div>{item.ScenicSpotName}</div>
            <div>{item.Description}</div>
        </div>
    );
}