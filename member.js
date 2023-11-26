function skillsMember() {
  var member = new Member();
  member.name = 'John Doe';
  member.skills = ['js', 'java', 'c#'];
  member.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Member saved');
    }
  });
}