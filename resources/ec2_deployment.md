# How To Setup EC2

## VPC and Subnets
The ideal setup is the client interacts with the client-side services (whether it is AWS Amplify or Vercel) and they communicate with a VPC internet gateway. This allows commuication in the virtual private cloud and the public subnet through a public router table. Within the public subnet, we setup the EC2 instance within. In the the private subnet, there is the Amazon RDS, so the public cannot access the database from the internet. 

### Step 1: Creating the Virtual Private Cloud (VPC)
- A VPC isolates servers from other servers in AWS. 
- DO not use the default one

