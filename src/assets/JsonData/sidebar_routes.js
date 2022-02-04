import {RiDashboardFill} from "react-icons/ri"
import {BiWorld} from "react-icons/bi"
import {AiFillMessage, AiFillYoutube} from "react-icons/ai"
import {FaEnvelope} from "react-icons/fa"
import {SiSimpleanalytics} from "react-icons/si"
import {FiUsers} from "react-icons/fi"


export default [
    {
        "display_name": "Dashboard",
        "route": "/",
        "icon":<RiDashboardFill/>
    },
    {
        "display_name": "Blog",
        "route": "/blog",
        "icon":<BiWorld/>
    },
    {
        "display_name": "Contact",
        "route": "/contact",
        "icon":<AiFillMessage/>
    },
    {
        "display_name": "E-Learning",
        "route": "/learn",
        "icon":<AiFillYoutube/>
    },
    {
        "display_name": "Subcriber",
        "route": "/subscribe",
        "icon":<FaEnvelope/>
    },
]