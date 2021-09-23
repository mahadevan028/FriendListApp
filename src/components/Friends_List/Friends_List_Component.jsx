import React from 'react'
import './Friends_List_Styles.css';


function Friends_List_Component({ list, deleteFriend, favouriteFriend }) {
    return (
        <div className="lean-scroll">
                {list.map(item => {
                    return (
                        <div key={item.key} className="list-row ">
                            <div className="status">
                            <div className="m-10" onClick={() => favouriteFriend(item.key)}>
                                 {item.isFavorite ? (
                                        <i className="fa fa-star favourites-yellow" aria-hidden="true"></i>
                                    ) : (
                                        <i
                                            className="fa fa-star-o"
                                            aria-hidden="true"
                                        ></i>
                                    )}
                                </div>
                            </div>
                            <div className="content text-start">
                            <div className="font-style">{item.name}</div>
                             <div>is your friend</div>
                            </div>
                            <div className="action">
                            <div
                                    onClick={() => deleteFriend(item.key)}
                                    className="m-10 delete_icon"
                                >
                                    <i className="fa fa-trash icon-visibility" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        // <tr key={item.key}>
                        //     <td>
                        //         <div className="m-10" onClick={() => favouriteFriend(item.key)}>
                        //             {item.isFavorite ? (
                        //                 <i className="fa fa-star favourites-yellow" aria-hidden="true"></i>
                        //             ) : (
                        //                 <i
                        //                     className="fa fa-star-o"
                        //                     aria-hidden="true"
                        //                 ></i>
                        //             )}
                        //         </div>
                        //     </td>
                        //     <td className="text-start">
                        //         <div className="font-style">{item.name}</div>
                        //         <div>is your friend</div>
                        //     </td>
                        //     <td>
                        //         <div
                        //             onClick={() => deleteFriend(item.key)}
                        //             className="m-10 delete_icon"
                        //         >
                        //             <i className="fa fa-trash icon-visibility" aria-hidden="true"></i>
                        //         </div>
                        //     </td>
                        // </tr>
                    );
                })}
        </div>
    )
}

export default Friends_List_Component
