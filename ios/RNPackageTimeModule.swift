//
//  RNPackageTimeModule.swift
//  RNPackageTimeModule
//
//  Copyright © 2021 Shengwu Cong. All rights reserved.
//

import Foundation

@objc(RNPackageTimeModule)
class RNPackageTimeModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
