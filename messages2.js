const data ={
    currentUser: {
        image: {
            png: "./public/profile.jpg",
        },
        username: "Dükkan Sahibi",
    },
    comments:[
        {
            parent:0,
            id:1,
            content:
            "Yemekler Harika olmuş. Çok hızlı ve sıcak geldi. Tek sıkıntısı porsiyonlar biraz küçük arttırılırsa daha güzel olur.",
            createdAt:"15 dakika önce",
            user:{
                image:{
                    png:"public/profile.png",
                },
                username:"Abdullah",
            },
            footer:"Hız: 9/10 Lezzet: 9/10 Servis: 7/10",
            replies:[],
        },
        {
            parent:0,
            id:2,
            content:
            "Yemekler kötüydü ve buz gibi geldi.",
            createdAt:"58 dakika önce",
            user:{
                image:{
                    png:"./public/profile1.png",
                },
                username:"Mert",
            },
            footer:"Hız: 3/10 Lezzet: 3/10 Servis: 5/10",
            replies:[
                {
                    parent:2,
                    id:1,
                    content:"Merhaba görüşlerinizi bildirdiğiniz için teşekkür ederiz ve yaşadığınız deneyim için özür dileriz bir sonraki sefere düzeltmek isteriz. ",
                    createdAt:'3 dakika önce',
                    replyingTo:"Mert",
                    user:{
                        image:{
                            png:"./public/profile.jpg",
                        },
                        username:"Dükkan Sahibi"
                    },
                },
            ],
        },
    ],
};
function appendFrag(frag, parent) {
    var children = [].slice.call(frag.childNodes, 0);
    parent.appendChild(frag);
    return children[1];
  }
  
  const addComment = (body, parentId, replyTo = undefined) => {
    let commentParent =
      parentId === 0
        ? data.comments
        : data.comments.filter((c) => c.id == parentId)[0].replies;
    let newComment = {
      parent: parentId,
      id:
        commentParent.length == 0
          ? 1
          : commentParent[commentParent.length - 1].id + 1,
      content: body,
      createdAt: "Now",
      replyingTo: replyTo,
      score: 0,
      replies: parent == 0 ? [] : undefined,
      user: data.currentUser,
      footer:"",
    };
    commentParent.push(newComment);
    initComments();
  };
  const deleteComment = (commentObject) => {
    if (commentObject.parent == 0) {
      data.comments = data.comments.filter((e) => e != commentObject);
    } else {
      data.comments.filter((e) => e.id === commentObject.parent)[0].replies =
        data.comments
          .filter((e) => e.id === commentObject.parent)[0]
          .replies.filter((e) => e != commentObject);
    }
    initComments();
  };
  
  const promptDel = (commentObject) => {
    const modalWrp = document.querySelector(".modal-wrp");
    modalWrp.classList.remove("invisible");
    modalWrp.querySelector(".yes").addEventListener("click", () => {
      deleteComment(commentObject);
      modalWrp.classList.add("invisible");
    });
    modalWrp.querySelector(".no").addEventListener("click", () => {
      modalWrp.classList.add("invisible");
    });
    modalWrp.querySelector(".close").addEventListener("click", () => {
        modalWrp.classList.add("invisible");
      });
  };
  
  const spawnReplyInput = (parent, parentId, replyTo = undefined) => {
    if (parent.querySelectorAll(".reply-input")) {
      parent.querySelectorAll(".reply-input").forEach((e) => {
        e.remove();
      });
    }
    const inputTemplate = document.querySelector(".reply-input-template");
    const inputNode = inputTemplate.content.cloneNode(true);
    const addedInput = appendFrag(inputNode, parent);
    addedInput.querySelector(".bu-primary").addEventListener("click", () => {
      let commentBody = addedInput.querySelector(".cmnt-input").value;
      if (commentBody.length == 0) return;
      addComment(commentBody, parentId, replyTo);
    });
  };
  
  const createCommentNode = (commentObject) => {
    const commentTemplate = document.querySelector(".comment-template");
    var commentNode = commentTemplate.content.cloneNode(true);
    commentNode.querySelector(".usr-name").textContent =
      commentObject.user.username;
    commentNode.querySelector(".usr-img").src = commentObject.user.image.png;
    commentNode.querySelector(".cmnt-at").textContent = commentObject.createdAt;
    commentNode.querySelector(".c-footer").textContent = commentObject.footer;
    commentNode.querySelector(".c-body").textContent = commentObject.content;
    if (commentObject.replyingTo)
      commentNode.querySelector(".reply-to").textContent =
        "@" + commentObject.replyingTo;
    if (commentObject.user.username == data.currentUser.username) {
      commentNode.querySelector(".comment").classList.add("this-user");
      commentNode.querySelector(".delete").addEventListener("click", () => {
        promptDel(commentObject);
      });
      commentNode.querySelector(".edit").addEventListener("click", (e) => {
        const path = e.currentTarget.closest(".comment").querySelector(".c-body");
        if (!path.getAttribute("contenteditable") || 
          path.getAttribute("contenteditable") === false) {
          path.setAttribute("contenteditable", true);
          path.focus();
        } else {
          path.removeAttribute("contenteditable");
          const newContent = path.textContent;
          commentObject.content = newContent;
          initComments();
        }
      });
      return commentNode;
    }
    return commentNode;
  };
  
  const appendComment = (parentNode, commentNode, parentId) => {
    const bu_reply = commentNode.querySelector(".reply");
    const appendedCmnt = appendFrag(commentNode, parentNode);
    const replyTo = appendedCmnt.querySelector(".usr-name").textContent;
    bu_reply.addEventListener("click", () => {
      if (parentNode.classList.contains("replies")) {
        spawnReplyInput(parentNode, parentId, replyTo);
      } else {
        spawnReplyInput(
          appendedCmnt.querySelector(".replies"),
          parentId,
          replyTo
        );
      }
    });
  };
  
  function initComments(
    commentList = data.comments,
    parent = document.querySelector(".comments-wrp")
  ) {
    parent.innerHTML = "";
    commentList.forEach((element) => {
      var parentId = element.parent == 0 ? element.id : element.parent;
      const comment_node = createCommentNode(element);
      if (element.replies && element.replies.length > 0) {
        initComments(element.replies, comment_node.querySelector(".replies"));
      }
      appendComment(parent, comment_node, parentId);
    });
  }
  initComments();
  