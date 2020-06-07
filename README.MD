-Algorithmic and CS Concepts-

-Concurrency
Process- High Level language translated to machine code binary. A process can be thought of as a program in execution. Older machines once core or process at once and one single program nowadays can have multiple processes.

Thread- is a unit of execution within a process. A process can have anywhere from just one thread(back in the day) to now many threads. We are dealing here with multiple threaded and concurrent execution spread amongst threads.

Concurrency in computing is the execution of a series of computations at the same time in an "out-of-order" manner, in partial order, or in full order without affecting the final outcome.
This is done to boost the performance of algorithms whose operations can be executed in multiple assortments (and it is the job of the programmer/compiler/engineer to ensure that the final desired output is guaranteed to stay as desired).
Three key ideas in concurrency:
• A program is a set on instructions (that we as programmers write and hope to animate in some environment where the instructions will be useful).
• A process is an instance of a program. Notice how "instance" implies that there can be multiple processes with the same program on a single machine.
• A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler. Threads conceptually "live inside" processes.

Pros- Cons
Performance Hard to debug
Resource Utilization Resource Overhead
Reliability

Differences between Processes and Threads
Process- independent operations being performed,
isolated memory
More overhead completely separate individual heap more scheduling. To run process concurrently separate process to do so managed.

Threads- Operations related to others, heap memories shared with other threads
Setup to run concurrently done within the code.

Threads in Execution
Threads will need a more complex process control block structure than a single process which will have it's own separate memory address block and modify it's own code data and files.
A threaded process will have multiple registers and address stacks and be working with the same code data and files. There is a per thread execution context. How are these concurrent thread process often designed?

2 Different Models of Concurrent Threads
-Shared Memory Model, heap is shared using threads, threads access objects within the heap. Thread 1 deposit 100, thread 2 withdraw 500, and if thread 1 withdraws 500. Other threads see changes within shared memory model.
-Message Passing, send message over network
Process 1 sends hello to process 2 and Process 2 sends Hello to Process 1, unknown who receives the message before the other or that one doesn't receive or both don't receive the message. Utilized in distributed systems.

More Threads then processing or only one core on CPU?

T1- Runs A() then B()

T2- X() then Y()

Possible order AB XY, AXYB

-Reordering
BYAX, as long as there is an enforced relationship between BYAX then this is allowable if the code accommodates processes running in orders that may occur once tested or utilized. Or more clearly that there aren't issues with this behavior.

Interleaving- Two operations within different threads acting on the same have multiple steps and the sequences of steps overlap in time leading to mixed results of efficacy.
Race Conditions
If more than one thread is writing to a variable such as balance and then other is also writing to that variable. In this case Balance.

Balance = 0 ( In this scenario Balance was read at the same time.

T1- Decrement Balance , balance = balance +1

T2- Increment Balance, balance = balance -1

Condition where T1 runs accesses balance then goes to thread 2 and decrements to -1 but when T1 restarts balance is still 0 and output is equal to 1. A common issue with concurrent code.

You can't tell just by looking at the code whether a expression will be safe from race conditions within a multi-threaded process.
Deadlock Amongst Threads Waiting For Resources:

Lock Condition- Waiting on a returned result(side effect)

Two Separate Threads needed to complete a Task

T1 A() locks

T2 B() waiting for A() to finish but if A() doesn't release lock, both are waiting on a resource and B() is stuck waiting.

Concurrency bugs may be hard to troubleshoot and reproduce as they can rely on outside timing and side effects to be very specific in order to occur. Utilizing a print operation for a result to check values may cause the bug to disappear as those functions tend to be much slower and can affect the timing necessary to see these bugs appear.

-Referrals
Establish contact with someone interested in the same area of design or development that you are and use
that upon earnest research to use that as a wedge to engage within a conversation with a strong basis. You can also express interest in the work their company does in general. Online meetups and networking events are also a good place to get face to face contact with those within the industry.

-Effective Recruiter communications
Punctuality(quick response in all forms of communication), Formality(respect, professionalism, businesslike email structure), Patience, Honesty, friendliness
