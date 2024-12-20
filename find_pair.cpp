#include <iostream>
#include <vector>
using namespace std;

void find_pair(int num[],int target,int n){
    vector<vector<int>> arr;
    int a=0;
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){ 
            cout<<i<<j<<endl;
            
            if(target==(num[i]+num[j])){
                arr.push_back({num[i],num[j]});
                a=a+1;
            }
        }
    }
    
    if(a==0){
        cout<<"Pair not found";
    }else{
        for(const auto& row: arr){
            cout<<"Pair found("<<row[0]<<","<<row[1]<<")"<<endl;
            }
        }
    }

int main(){
    int n,target;
    cout<<"enter the size of the array: ";
    cin>>n;
    cout<<endl<<"enter the value for target: ";
    cin>>target;
    
    int nums[n];
    for(int i=0;i<n;i++){
        cout<<"enter the value for "<<i<<" index: ";
        cin>>nums[i];
    }
    
    find_pair(nums,target,n);
}