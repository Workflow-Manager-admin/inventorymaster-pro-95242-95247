#!/bin/bash
cd /home/kavia/workspace/code-generation/inventorymaster-pro-95242-95247/main_container_for_inventorymaster_pro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

