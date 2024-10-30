#we are using the azurerm provider to use aks from azure
provider "azurerm" {
  features {}
}
# creation of the resource group
resource "azurerm_resource_group" "aks_rg" {
  name     = "line-ten-rg"
  location = "eastus"  # Change as needed
}
#this is the definition of the k8s cluster to create
  resource "azurerm_kubernetes_cluster" "aks" {
    name                = "line-ten-aks"
    location            = azurerm_resource_group.aks_rg.location #the region
    resource_group_name = azurerm_resource_group.aks_rg.name      #the cluster name
    dns_prefix          = "line-ten-aks"

#in the node pool we define how many nodes we need also the node vm type that needs to be in the free tier
    default_node_pool {
      name       = "nodepool1"
      node_count = 1
      vm_size    = "Standard_DS2_v2"  # Change this to a suitable VM size
    }
    #assigns a system-assigned managed identity to the resource,
    #so it can securely access other Azure services without needing credentials.
    identity {
    type = "SystemAssigned"
  }

  tags = {
    environment = "dev"
  }
}
