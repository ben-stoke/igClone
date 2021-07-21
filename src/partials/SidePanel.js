import { Link } from "react-router-dom";
// import lib from "../config/lib";
const SidePanel = () => {
    return (

        <div className="side-panel">
            <div className="side-panel-wrapper bg-white">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#chat" role="tab" data-toggle="tab">
                            <span>Chat</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#profile" role="tab" data-toggle="tab">
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="#todo-list" role="tab" data-toggle="tab">
                            <span>Todo</span>
                        </Link>
                    </li>
                    <li className="panel-close">
                        <Link className="side-panel-toggle" to="">
                            <i className="ti-close" />
                        </Link>
                    </li>
                </ul>
                <div className="tab-content">
                    {/* chat START */}
                    <div id="chat" role="tabpanel" className="tab-pane fade in active">
                        <div className="chat">
                            <div className="chat-user-list scrollable">
                                <div className="chat-section">
                                    <h5 className="chat-title">Recent</h5>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-1.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name">Jordan Hurst</span>
                                            <span className="prev-chat">What good's a reward if...</span>
                                        </div>
                                        <span className="status online"><span /></span>
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-2.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name">Harriet Douglas</span>
                                            <span className="prev-chat">Don't talk to me, stranger...</span>
                                        </div>
                                        <span className="status no-disturb" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-3.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name">Victoria Clayton</span>
                                            <span className="prev-chat">Well, the Force is what...</span>
                                        </div>
                                        <span className="status away" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-6.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name">Michael Birch</span>
                                            <span className="prev-chat">Good. Use your aggressive...</span>
                                        </div>
                                        <span className="status online" />
                                    </Link>
                                </div>
                                <div className="chat-section">
                                    <h5 className="chat-title">Members</h5>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-4.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name pdd-top-5">Samuel Field</span>
                                        </div>
                                        <span className="status" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-5.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name pdd-top-5">Jennifer Watkins</span>
                                        </div>
                                        <span className="status" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-6.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name pdd-top-5">Michael Birch</span>
                                        </div>
                                        <span className="status" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-10.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name pdd-top-5">Renee Edwards</span>
                                        </div>
                                        <span className="status" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-11.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name pdd-top-5">Kathy White</span>
                                        </div>
                                        <span className="status" />
                                    </Link>
                                    <Link to="" className="chat-user chat-toggle">
                                        <img alt="" className="thumb-img" src="assets/images/avatars/thumb-9.jpg"  />
                                        <div className="user-info">
                                            <span className="user-name pdd-top-5">Daryl Ellis</span>
                                        </div>
                                        <span className="status" />
                                    </Link>
                                </div>
                            </div>
                            <div className="conversation">
                                <div className="conversation-wrapper">
                                    <div className="conversation-header">
                                        <Link to="" className="back chat-toggle">
                                            <i className="ti-arrow-circle-left" />
                                        </Link>
                                        <span className="user-name">Jordan Hurst</span>
                                    </div>
                                    <div className="conversation-body">
                                        <div className="msg">
                                            <div className="bubble me">
                                                <span>Feeling all right, sir?</span>
                                            </div>
                                        </div>
                                        <div className="msg">
                                            <div className="bubble friend">
                                                <span>Just like new</span>
                                            </div>
                                        </div>
                                        <div className="msg">
                                            <div className="bubble friend">
                                                <span>How about you?</span>
                                            </div>
                                        </div>
                                        <div className="msg">
                                            <div className="bubble me">
                                                <span>Right now I feel I could take on the whole Empire
                                                    myself</span>
                                            </div>
                                        </div>
                                        <div className="msg">
                                            <div className="bubble friend">
                                                <span>All right</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="conversation-footer">
                                        <button className="upload-btn">
                                            <i className="ti-camera" />
                                        </button>
                                        <input className="chat-input" type="text" placeholder="Type a message..." />
                                        <button className="sent-btn">
                                            <i className="fa fa-send-o" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* chat END */}
                    {/* profile START */}
                    <div id="profile" role="tabpanel" className="tab-pane fade">
                        <div className="profile scrollable">
                            <div className="pdd-horizon-20 pdd-top-20">
                                <div className="border bottom">
                                    <div className="text-center mrg-top-20">
                                        <div className="row">
                                            <div className="col-md-6 ml-auto mr-auto text-center">
                                                <img alt="" className="img-fluid border-radius-round" src="assets/images/avatars/user-1.jpg"  />
                                            </div>
                                        </div>
                                        <h4 className="mrg-top-20">Nate Leong</h4>
                                        <span className>@Frontend Developer</span>
                                    </div>
                                    <div className="row text-center pdd-vertical-20">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-4 col-xs-4 border right">
                                                    <div className="pdd-vertical-10">
                                                        <span className="font-size-18 text-dark">18</span>
                                                        <small>Projects</small>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-xs-4 border right">
                                                    <div className="pdd-vertical-10">
                                                        <span className="font-size-18 text-dark">1,362</span>
                                                        <small>Followers</small>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <div className="pdd-vertical-10">
                                                        <span className="font-size-18 text-dark">362</span>
                                                        <small>Points</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pdd-horizon-20 pdd-top-20">
                                <div className="border bottom">
                                    <h5 className="text-dark mrg-btm-20">Quick Tools</h5>
                                    <ul className="list-unstyled list-link font-size-16 pdd-btm-20">
                                        <li>
                                            <Link to="#">
                                                <i className="ti-user pdd-right-10" />
                                                <span>Friend Request</span>
                                                <span className="label label-info mrg-left-5">2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="ti-book pdd-right-10" />
                                                <span>Inbox</span>
                                                <span className="label label-warning mrg-left-5">8</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="ti-settings pdd-right-10" />
                                                <span>Settings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="padding-20">
                                <h5 className="text-dark mrg-btm-20">Recent</h5>
                                <ul className="list-unstyled list-info">
                                    <li>
                                        <Link to="#">
                                            <img alt="" className="thumb-img" src="assets/images/avatars/thumb-1.jpg"  />
                                            <div className="info">
                                                <span className="title">Jordan Hurst</span>
                                                <span className="sub-title">have send you a request</span>
                                                <span className="float-object">8m</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img alt="" className="thumb-img" src="assets/images/avatars/thumb-4.jpg"  />
                                            <div className="info">
                                                <span className="title">Samuel Field</span>
                                                <span className="sub-title">have send you a request</span>
                                                <span className="float-object">7d</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="thumb-img bg-info text-center font-size-25 font-secondary">
                                                <span className="text-white">E</span>
                                            </span>
                                            <div className="info">
                                                <span className="title">Espire</span>
                                                <span className="sub-title">Welcome on Board</span>
                                                <span className="float-object">7d</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* profile END */}
                    {/* todo START */}
                    <div id="todo-list" role="tabpanel" className="tab-pane fade">
                        <div className="todo-wrapper">
                            <div className="todo-category-wrapper">
                                <div className="row mrg-btm-15">
                                    <div className="col-md-12">
                                        <h3 className="no-mrg-top">Todo List</h3>
                                    </div>
                                </div>
                                <Link to="" className="todo-toggle">
                                    <div className="todo-category">
                                        <span className="amount">8</span>
                                        <span className="category">Today</span>
                                    </div>
                                </Link>
                                <Link to="" className="todo-toggle">
                                    <div className="todo-category">
                                        <span className="amount">18</span>
                                        <span className="category">This Week</span>
                                    </div>
                                </Link>
                                <Link to="" className="todo-toggle">
                                    <div className="todo-category">
                                        <span className="amount">28</span>
                                        <span className="category">This Month</span>
                                    </div>
                                </Link>
                                <Link to="" className="todo-toggle">
                                    <div className="create-category">
                                        <i className="amount fa fa-plus-circle" />
                                        <span className="category">New Category</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="todolist-wrapper">
                                <div className="todolist-header">
                                    <Link to="" className="back todo-toggle">
                                        <i className="ti-arrow-circle-left" />
                                    </Link>
                                    <h3 className="category">This Week</h3>
                                    <Link to="#" className="add">
                                        <span>ADD</span>
                                    </Link>
                                </div>
                                <div className="todolist-body">
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="task1" name="task1" type="checkbox" />
                                        <label htmlFor="task1">I hope the old man got that tractor </label>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="task2" name="task2" type="checkbox" />
                                        <label htmlFor="task2">Come on, come on!</label>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="task3" name="task3" type="checkbox" />
                                        <label htmlFor="task3">it was dangerous here</label>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="task4" name="task4" type="checkbox" />
                                        <label htmlFor="task4">I hope the old man got that tractor </label>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="task5" name="task5" type="checkbox" />
                                        <label htmlFor="task5">Artoo! Artoo, quickly!</label>
                                    </div>
                                </div>
                                <div className="todolist-body">
                                    <div className="pdd-btm-5 mrg-btm-15 border bottom">
                                        <p className="mrg-btm-5">Completed</p>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="completed-1" name="completed-1" type="checkbox" defaultChecked />
                                        <label htmlFor="completed-1">I hope the old man got that tractor </label>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="completed-2" name="completed-2" type="checkbox" defaultChecked />
                                        <label htmlFor="completed-2">Come on, come on!</label>
                                    </div>
                                    <div className="checkbox">
                                        <button className="delete">
                                            <i className="ti-close" />
                                        </button>
                                        <input id="completed-3" name="completed-3" type="checkbox" defaultChecked />
                                        <label htmlFor="completed-3">it was dangerous here</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default SidePanel;