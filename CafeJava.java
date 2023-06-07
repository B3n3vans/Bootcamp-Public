// package Java.Assignments;

public class CafeJava {
        public static void main(String[] args){
            
                    // APP VARIABLES
                    // Lines of text that will appear in the app. 
                    String generalGreeting = "Welcome to Cafe Java, ";
                    String pendingMessage = ", your order will be ready shortly";
                    String readyMessage = ", your order is ready";
                    String displayTotalMessage = "Your total is $";
                    
                    // Menu variables (add yours below)
                    double mochaPrice = 3.5;
                    double dripCoffee = 3.75;
                    double dripLatte = 4.5;
                    double dripCappuccino = 4.75;
                
                    // Customer name variables (add yours below)
                    String customer1 = "Cindhuri";
                    String customer2 = "Sam";
                    String customer3 = "Jimmy";
                    String customer4 = "Noah";
                
                    // Order completions (add yours below)
                    boolean isReadyOrder1 = false;
                    boolean customer1OrderStatusFlag = false;
                    boolean customer2OrderStatusFlag = false;
                    boolean customer3OrderStatusFlag = true;
                    boolean customer4OrderStatusFlag = false;
                
                    // APP INTERACTION SIMULATION (Add your code for the challenges below)
                    // Example:
                    System.out.println(generalGreeting + customer1); 
                    System.out.println(customer1 + pendingMessage +". " + displayTotalMessage + dripCoffee); // Displays "Welcome to Cafe Java, Cindhuri"
                    System.out.println(customer4OrderStatusFlag? customer4 + readyMessage:
                     customer4 + pendingMessage +". " + displayTotalMessage + dripCappuccino); 
                    System.out.println(customer2 + (customer2OrderStatusFlag? readyMessage: pendingMessage + " " + displayTotalMessage + (dripLatte * 2) ));
                    System.out.println(customer3 + " " + displayTotalMessage + (dripLatte - dripCoffee));
                    // Displays "Welcome to Cafe Java, Cindhuri"
                    // Displays "Welcome to Cafe Java, Cindhuri"
                    // ** Your customer interaction print statements will go here ** //
        }
    }
    

