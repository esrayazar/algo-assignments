/*
Create display() that returns a string containing all list values. 
Build what you wish console.log(myList) did!
*/ 
class SLL {
    // constructor, other methods, removed for brevity
       display() {
    	// neatly display nodes in my list
        let new_node = this.head;
        let myList = [];
        while(!new_node.next)
        {
            myList.push(new_node.data);
            new_node = new_node.next;
        }
        console.log(myList);
    }
 }

