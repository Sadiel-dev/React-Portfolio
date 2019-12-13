import { 
    faTrash, 
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhoneVolume,
    faEnvelopeOpenText,
    faMapMarkerAlt,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
return library.add(faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhoneVolume,
    faEnvelopeOpenText,
    faMapMarkerAlt,
    faLock
    );
};

export default Icons;
