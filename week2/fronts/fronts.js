/*
Write a method that accepts a value and create a new node, 
assign it to the list head, and return a pointer to the new head node.

*/

class SLL {
    // constructor, other methods, removed for brevity
    addFront(value) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if (!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;

    }
}


/*
Write a method to remove the head node and return the new list head node.
 If the list is empty, return null.
 */

class SLL {
    // constructor, other methods, removed for brevity
    removeFront() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
    }
}






/*
Write a method to return the value (not the node) at the head of the list. 
If the list is empty, return null.
*/

class SLL {
    // constructor, other methods, removed for brevity
     front() {
    if (!this.head) {
        return null;
    }

    return this.head.data;
    }
 }

