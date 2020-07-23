def removeKthLinkedListNode(head, k):
    """ 
    (Removing kth node)
    We can count the number of nodes total which will give us the length
    we can use the length of the linked list and then use the value k to effectively 
    discover the kth linked list node from the end of the linked list.
    This would be O(n) time for the first traversal and a O(length_of_list - k)n # of 
    traversals to find the kth node from the end and remove that node, less than O(2n) if not and 
    is effectively O(n) runtime.
    
    (Return the head node) 
    And if we don't create another data structure through an O(n)
    variable assigment in the solution we effectively get O(1) space complexity.

    Checks to make:
    *If k > length of list then return as we don't want to try and remove a kth node that is
    farther back then the actual length of our list!

    """
    # Establish current node variable and initialize length of linked list as 1
    # to get n # of elements
    length_of_list = 1
    curr_node = head

    # Traverse the list and add to length of list with each node to get total length
    # we start at 1 since we are already given the head but need to start with a value of
    # of 1 to account for it's length
    while curr_node is not None:
        curr_node = curr_node.next
        length_of_list += 1

    # check for condition where k is greater than length of list and if so return head
    if k > length_of_list:
        return head

    # Subtract k from length_of_list to determine which node needs to be removed
    k_node_removed = length_of_list - k
    # Start at head and traverse to k_node_removed remove it from the linked list
    curr_node = head
    for i in range(k_node_removed):
        curr_node = node.next
