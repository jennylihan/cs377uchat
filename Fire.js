//Login and createAccount were adapted from https://github.com/JscramblerBlog/RNfirebase-chat/blob/master/components/Signup.js
//The rest of the code was adapted from https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c

import firebase from 'firebase';

class Fire {
	constructor() {
		this.chatRoomName = "messages";
		if (!firebase.apps.length) {
			firebase.initializeApp({
        apiKey: "AIzaSyBECbPsPXyNLhUqHTqFJUJVjqtpLWimxJQ",
        authDomain: "cs377u-demo.firebaseapp.com",
        databaseURL: "https://cs377u-demo.firebaseio.com",
        projectId: "cs377u-demo",
        storageBucket: "cs377u-demo.appspot.com",
        messagingSenderId: "868121913126",
        appId: "1:868121913126:web:6caee51369ad913b7c43e7",
        measurementId: "G-HD064Q1H6J"
			});
		}
	}

	login = async (user, success_callback, failed_callback) => {
    console.log(user.email);
    console.log(user.password);
		await firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.then(success_callback, failed_callback);
	};

	createAccount = async user => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(
      function() {
        console.log(
          'created user successfully. User email:' +
            user.email +
            ' name:' +
            user.name
        );
        var userf = firebase.auth().currentUser;
        userf.updateProfile({ displayName: user.name }).then(
          function() {
            console.log('Updated displayName successfully. name:' + user.name);
            alert(
              'User ' + user.name + ' was created successfully. Please login.'
            );
          },
          function(error) {
            console.warn('Error update displayName.');
          }
        );
      },
      function(error) {
        console.error('got error:' + typeof error + ' string:' + error.message);
        alert('Create account failed. Error: ' + error.message);
      }
    );
	};

	updateProfile = async uri => {
		console.log('got profile to update. uri:' + uri);
		var userf = firebase.auth().currentUser;
		// try {
	    const response = await fetch(uri); //I have no idea what this is
	    // const blob = await response.blob();
			const { timestamp: numberStamp, text, user } = snapshot.val();
			// const { key: _id } = snapshot;
			const timestamp = new Date(numberStamp);
			const profile_info = {
	      // _id,
	      timestamp,
	      pname, //how do I get these passed in
				zoom,
	      userf,
	    };
	    const ref = firebase
	      .storage()
	      .ref('profiles')
	      .child(userf); // changed from: uuid.v4()
	    const task = ref.push();
		// }
	};

	uploadImage = async uri => {
	  console.log('got image to upload. uri:' + uri);
	  try {
	    const response = await fetch(uri);
	    const blob = await response.blob();
	    const ref = firebase
	      .storage()
	      .ref('avatar')
	      .child(uuid.v4());
	    const task = ref.put(blob);

	    return new Promise((resolve, reject) => {
	      task.on(
	        'state_changed',
	        () => {

	        },
	        reject, () => resolve(task.snapshot.downloadURL)
	      );
	    });
	  } catch (err) {
	    console.log('uploadImage try/catch error: ' + err.message);
	  }
	};

	updateAvatar = url => {

	  var userf = firebase.auth().currentUser;
	  if (userf != null) {
	    userf.updateProfile({ avatar: url }).then(
	      function() {
	        console.log('Updated avatar successfully. url:' + url);
	        alert('Avatar image is saved successfully.');
	      },
	      function(error) {
	        console.warn('Error update avatar.');
	        alert('Error update avatar. Error:' + error.message);
	      }
	    );
	  } else {
	    console.log("can't update avatar, user is not login.");
	    alert('Unable to update avatar. You must login first.');
	  }
	};


  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

	get name() {
    return (firebase.auth().currentUser || {}).displayName;
  }
  get ref() {
    return firebase.database().ref(this.chatRoomName);
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = (callback, chatRoomName) => {
		this.chatRoomName = chatRoomName;
		this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
		}

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

  Fire.shared = new Fire();
  export default Fire;
