import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, redingTime}) => {
    return (
        
         <div className="md:w-1/3 bg-gray-300 rounded-xl ml-4 mt-4">
            <div>
                <h3 className=" text-2xl"> redingTime:{redingTime} </h3>
            </div>
            <h2 className="text-2xl text-center "> Bookmarked Blog: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    redingTime: PropTypes.number

}
export default Bookmarks;