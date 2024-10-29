provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "aks_rg" {
  name     = "line-ten-rg"
  location = "eastus"  # Change as needed
}

  resource "azurerm_kubernetes_cluster" "aks" {
    name                = "line-ten-aks"
    location            = azurerm_resource_group.aks_rg.location
    resource_group_name = azurerm_resource_group.aks_rg.name
    dns_prefix          = "line-ten-aks"


    default_node_pool {
      name       = "nodepool1"
      node_count = 1
      vm_size    = "Standard_DS2_v2"  # Change this to a suitable VM size
    }

    identity {
    type = "SystemAssigned"
  }

  tags = {
    environment = "dev"
  }
}
