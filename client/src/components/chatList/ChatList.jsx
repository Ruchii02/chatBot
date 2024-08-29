import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";//added 
import { useState, useEffect } from "react";

const ChatList = () => {
const queryClient = useQueryClient();//added
const [chats, setChats] = useState([]);
const [message, setMessage] = useState("");

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
   
  // Fetch the chat list when component mounts
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
          credentials: "include",
        });
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error("Failed to fetch chats", error);
      }
    };

    fetchChats();
  }, []);


   // Mutation to delete chat
   const deleteChat = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to delete chat");
      }
    },
    onSuccess: (id) => {
      // Update local state to remove the deleted chat
      setChats((prevChats) => prevChats.filter((chat) => chat._id !==id));

      // Optionally invalidate queries to refetch the latest data
      queryClient.invalidateQueries({ queryKey: ["userChats"] });

      setMessage("Chat deleted successfully.");
    },
    onError: () => {
      setMessage("Failed to delete chat. Please try again.");
    },
  });

  // Handle chat deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      deleteChat.mutate(id);
    }
  };





  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore BuddyBee</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
            <div key={chat._id} className="chatItem">{/*added*/}
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
              <button className="deleteButton" onClick={() => handleDelete(chat._id)}>Delete</button>{/*added*/}
              </div>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to BuddyBee Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
