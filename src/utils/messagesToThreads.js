// [Message] => [[parentMessage, ...childMessages]]
const messagesToThreads = messages => {
  const threads = [];
  const threadIndexes = {};
  const childMessages = [];
  let index = 0;
  messages.forEach(m => {
    if (m.parentId === null) {
      threads.push([m]);
      threadIndexes[m.id] = index;
      index++;
    } else childMessages.push(m);
  });
  childMessages.forEach(m => {
    if (threadIndexes[m.parentId] !== undefined) {
      threads[threadIndexes[m.parentId]].push(m);
    }
  });
  return threads;
};

export default messagesToThreads;
