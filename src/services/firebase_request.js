import firestore from '@react-native-firebase/firestore';

const addData = ({ collectionName, payload }) => {
    payload.createdAt = firestore.FieldValue.serverTimestamp()
    return firestore().collection(collectionName).add(payload)
}

const addDocData = ({ collectionName, docId, payload }) => {
    payload.createdAt = firestore.FieldValue.serverTimestamp()
    return firestore().collection(collectionName).doc(docId).set(payload, { merge: true })
}

const getData = ({ collectionName }) => firestore().collection(collectionName).get()

const getDocData = ({ collectionName, docId }) => firestore().collection(collectionName).doc(docId).get()

const getWhere = ({ collectionName, payload }) => {
    const collection = firestore().collection(collectionName)
    const conditions = Object.keys(payload)
    return collection.where(conditions[0], '==', true).where(conditions[1], '==', true).get()
}

const getRealTimeWhere = ({ collectionName, userId }, handleRes, handleErr) => {
    firestore().collection(collectionName).where(`${userId}`, '==', true).onSnapshot(handleRes, handleErr)
}
const getRealTimeWhereDelete = ({ collectionName, userId }, handleRes, handleErr) => {
    firestore().collection(collectionName).where(`${userId}`, '==', true).onSnapshot(handleRes, handleErr)
}

const getRealTimeMsg = ({ collectionName, collectionId }, handleRes, handleErr) => {
    firestore().collection(collectionName).where("collectionId", '==', collectionId).onSnapshot(handleRes, handleErr)
}


export {
    addData,
    addDocData,
    getData,
    getDocData,
    getWhere,
    getRealTimeWhere,
    getRealTimeMsg,
    getRealTimeWhereDelete
}