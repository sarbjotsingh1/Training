package com.mindsprint.hello;

public class TwoDArray {
    public static void main(String[] args) {
        int[][] nums = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int row = 0; row < nums.length; row++) {
            for (int col = 0; col < nums[row].length; col++) {
                System.out.print(nums[row][col] + "\t");
            }
            System.out.println();
        }

        for (int[] row : nums) {
            for (int col : row) {
                System.out.print(col);
            }
            System.out.println(" ");
        }

        for (int[] row : nums) {
            for (int col : row) {
                System.out.print(col);
            }
            System.out.println(" ");
        }

    }
}
