#kube config output print after the k8s creation
output "kube_config" {
  value = azurerm_kubernetes_cluster.aks.kube_admin_config
  sensitive = true
}