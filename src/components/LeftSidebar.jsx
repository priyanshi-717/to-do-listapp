import { FiMenu, FiChevronsRight, FiList, FiAlignCenter, FiSquare, FiPlus, FiLogOut } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";
import './LeftSidebar.css';
export function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div className="head">
                <span>MENU</span>
                <FiMenu />
            </div>

            <div className="input-element">
                <FaMagnifyingGlass />
                <input type="text" placeholder="Search" size={30} />
            </div>

            <div className="task-element">
                <p>TASKS</p>
                <ul>
                    <li><FiChevronsRight /> Upcoming</li>
                    <li><FiList /> Today</li>
                    <li><SlCalender /> Calendar</li>
                    <li><FiAlignCenter /> Sticky Wall</li>
                </ul>
            </div>

            <div className="list-element">
                <p>LISTS</p>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <span>Personal</span>
                    </li>

                    <li>
                        <input type="checkbox" />
                        <span>Work</span>
                    </li>

                    <li>
                        <input type="checkbox" />
                        <span>List1</span>
                    </li>

                    <li>
                        <FiPlus />
                        <span>Add new list</span>
                    </li>
                </ul>
            </div>

            <div className="tag-element">
                <p>TAGS</p>
                <span>Tag1</span>
                <span>Tag2</span>
                <span>Add Tag</span>

            </div>

            <div className="control">

                <p><FiMenu />Settings</p>
                <p><FiLogOut />Sign out</p>
            </div>



        </div>
    );
}