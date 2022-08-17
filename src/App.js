import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10ox 30px rgba(0,0,0, 0.5",
        }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{opacity: 0 }}
            className="expand" 
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing a nd typesetting
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              repellat mollitia quos, culpa assumenda voluptate. Nisi porro nemo
              fuga numquam!
            </p>
          
          </motion.div>
        )}
      </motion.div>
      
    </div>
  );
}

export default App;
