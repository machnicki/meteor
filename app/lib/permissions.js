// check that userId i doc owner
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}