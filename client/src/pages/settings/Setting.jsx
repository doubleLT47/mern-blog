import "./setting.css"

import Sidebar from "../../components/sidebar/Sidebar"

const Setting = () => {
    return (
        <div className="setting">
            <div className="setting-wrapper">
                <div className="setting-title">
                    <div className="setting-update--title">Update your Account</div>
                    <div className="setting-delete--title">Delete Account</div>
                </div>
                <form action="" className="setting-form">
                    <label htmlFor="">Profile Picture</label>
                    <div className="setting-profile-picture">
                        <img src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/206227298_954913421735441_2310512072932402560_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=sUZIqlWZYUUAX-VGvQO&tn=_jQDKF2sWOioBJl2&_nc_ht=scontent.fsgn4-1.fna&oh=aa9a488ab97235f1a7c1bb252ba42870&oe=60E44754" alt="" />
                        <label htmlFor="file-input">
                            <i className="setting-pp-icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="file-input" style={{display: "none"}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Luan NT" />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="luannt@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                    <button className="setting-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting
