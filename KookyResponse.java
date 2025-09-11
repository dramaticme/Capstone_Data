/*
Username: {This creates a user account.}
Password: 
What is your Gender: {In words.}
What is your Age: {In words.}

Tell me about Yourself:
{Different You}

What is your LifeStyle: 
{Food, Music, Social Media, Family, Habits, Pls describe.}

How is your Mood Truck:
{Lovely, angry, scary, sad, Pls describe.}

What would you like to talk about [Academics/ Parents/ Friends]
{Type here}

Would you like to share any of your worries?
{space for you}
*/

import java.util.*;

public class KookyResponse{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        //Part 1:
        //Username:
        System.out.print("Username: ");
        String Username = sc.nextLine();

        //Password:
        System.out.print("Password: ");
        String Password = sc.nextLine();

        //What is your Gender:
        System.out.print("What is your Gender: ");
        String Gender = sc.nextLine();

        //What is your Age:
        System.out.print("What is your Age: ");
        String Age = sc.nextLine();

        //Part 2:
        //Tell me About Yourself
        System.out.println("Tell me about Yourself");
        System.out.println("{Different you}\n{Note: Type <End> after you finish Typing}: ");

        StringBuilder AboutYourself = new StringBuilder();

        while (true){
            String Line = sc.nextLine();
            if(Line.equalsIgnoreCase("End")){
                break;
            }
            AboutYourself.append(Line).append("\n");
        }

        //Part 3:
        //What is your Lifestyle: 
        System.out.println("What is your Lifestyle");
        System.out.println("{Food, Music, Social Media, Family, Habits, Pls describe.}\n{Note: Type <End> after you finish Typing}: ");

        StringBuilder Lifestyle = new StringBuilder();

        while(true){
            String Line = sc.nextLine();
            if(Line.equalsIgnoreCase("End")){
                break;
            }
            Lifestyle.append(Line).append("\n");
        }

        //Part 4:
        //How is your Mood Truck:
        System.out.println("How is your Mood Truck");
        System.out.println("{Lovely, angry, scary, sad, Pls describe.} \n{Note: Type <End> after you finish Typing}: ");

        StringBuilder MoodTruck = new StringBuilder();

        while(true){
            String Line = sc.nextLine();
            if(Line.equalsIgnoreCase("End")){
                break;
            }
            MoodTruck.append(Line).append("\n");
        }


    }
}