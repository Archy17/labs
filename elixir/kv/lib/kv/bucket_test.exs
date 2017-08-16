defmodule KV.BucketTest do
  use ExUnit.Case, async: true

  setup do
    {:ok, bucket} = start_supervised KV.Bucket
    %{bucket: bucket}
  end

  test "stores values by key", %{bucket: bucket} do
    assert KV.Bucket.get(bucket, "milk") == nil

    KV.Bucket.put(bucket, "milk", 3)
    assert KV.Bucket.get(bucket, "milk") == 3
  end

  test "delete values by key", %{bucket: bucket} do
    KV.Bucket.put(bucket, "orange", 5)
    assert KV.Bucket.get(bucket, "orange") == 5

    KV.Bucket.delete(bucket, "orange")
    assert KV.Bucket.get(bucket, "orange") == nil
  end
end
