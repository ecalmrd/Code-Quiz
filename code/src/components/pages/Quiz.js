import React, { useState } from "react";

export default function Quiz() {
  const styles = {
    body: {
      backgroundColor: "#353935",
      height: "100vh",
      width: "100vw",
      borderRadius: "10px",
      margin: "5px",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },

    container: {
      display: "flex",
      padding: "10px",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },

    questionEl: {
      color: "black",
      fontSize: "25px",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px black",
      width: "50vw",
      height: "100px",
    },

    pStyle: {
      color: "black",
      fontSize: "25px",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px",

    },

    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "10px",
      width: "50vw",
      height: "100px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px black",
      padding: "10px"
    },

    startBtn: {
      color: "black",
      margin: "10px",
      borderRadius: "10px",
      boxShadow: "0 0 10px black",
      fontSize: "20px",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer"
    },

  }
  return (
    <div style={styles.body}>
      {/* Quiz Questions */}
      <div className="container" style={styles.container}>

        <div className="question-container">
          <div className="question" style={styles.questionEl}>
            <p className ="questions" style={styles.pStyle}> Question </p> </div>
        </div>

        <form id="answer-buttons" className="formGrid" style={styles.formGrid}>
          <button class="btn"> option 1 </button>
          <button class="btn"> option 2 </button>
          <button class="btn"> option 3 </button>
          <button class="btn"> option 4 </button>
        </form>

        <div className="startBtn">
          <button className="startBtn" style={styles.startBtn}> Start Quiz </button>
        </div>
      </div>

    </div>
  )

}